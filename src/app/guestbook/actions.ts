'use server'

import { auth } from '@/auth'
import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function getGuestbookEntries() {
    return await prisma.guestbookEntry.findMany({
        orderBy: {
            created_at: 'desc',
        },
        take: 100,
    })
}

export async function saveGuestbookEntry(formData: FormData) {
    const session = await auth()
    if (!session?.user?.email) {
        throw new Error('Unauthorized')
    }

    const entry = formData.get('entry')?.toString() || ''
    const body = entry.slice(0, 500)

    if (!body) {
        throw new Error('Body is required')
    }

    await prisma.guestbookEntry.create({
        data: {
            email: session.user.email as string,
            body: body,
            created_by: session.user.name || 'Anonymous',
        },
    })

    revalidatePath('/guestbook')
}
