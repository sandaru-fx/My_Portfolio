import { getGuestbookEntries } from '@/app/guestbook/actions'

export default async function GuestbookEntries() {
    const entries = await getGuestbookEntries()

    if (entries.length === 0) {
        return <p className="text-neutral-500">No entries yet.</p>
    }

    return (
        <div className="flex flex-col space-y-4">
            {entries.map((entry) => (
                <div key={entry.id} className="flex flex-col space-y-1">
                    <div className="w-full text-sm break-words">
                        <span className="text-neutral-500 mr-1">{entry.created_by}:</span>
                        <span className="text-neutral-200">{entry.body}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}
