'use server'

export async function sendEmail(formData: FormData) {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')

    if (!name || !email || !message) {
        throw new Error('Missing fields')
    }

    // In a real app, you would use Resend or EmailJS here
    console.log('Email sent:', { name, email, message })

    return { success: true }
}
