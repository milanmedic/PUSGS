import nodemailer from 'nodemailer'
import { EndpointError } from '../../../classes/Error'
import { getUserById, updateById } from '../../userService'

/** EMAIL CONFIRMATION WORKFLOW
 * Send mail to recipient
 * Recipient clicks a link, containing his user id
 * Link re-routes him to an endpoint along with the user id
 * User is found in the Database via his user id
 * Edit his accountConfirmed field
 */

/** TODO
 * Disallow Login with OAuth or Plain Login if account not confirmed
 */

export async function sendMail(email, userId) {
    try {
        //send mail to recipient containing a route link
        //only for testing if we don't have an account

        let transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.CONFIRMATION_SERVICE_EMAIL,
                pass: process.env.CONFIRMATION_SERVICE_PASSWORD,
            },
        })
        let info = await transporter.sendMail({
            from: `"IDE MAIL 👻" <${process.env.CONFIRMATION_SERVICE_EMAIL}>`, // sender address
            to: email, // list of receivers
            subject: 'Account Confirmation', // Subject line
            text: `Please go to localhost:3000/user/confirm/${userId} to confirm your account.`, // plain text body
            html: `<b>To confirm your account please visit <a href="http://localhost:3000/user/confirm/${userId}">this link.</a></b>`, // html body/
        })
    } catch (err) {
        throw new Error(
            'There as an error with the mailing service' + err.message
        )
    }
}

export async function confirmAccount(req, res, next) {
    try {
        let user = await getUserById(req.params.id)
        if (!user) {
            return next(
                new EndpointError(
                    "The User doesn't exist in the database!",
                    404
                )
            )
        }
        let updated = await updateById(user.id, 'accountConfirmed', true)
        if (!updated) {
            return next(
                new EndpointError(
                    'There was an error while confirming your account',
                    500
                )
            )
        }
        return res.status(200).send('Account has been confirmed!')
    } catch (err) {
        return next(
            new EndpointError(
                'There was an error while confirming your account, please try again.',
                500
            )
        )
    }
}
