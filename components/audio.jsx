

export function Audio({ tracks }) {
    return (
        <div className="flex flex-wrap gap-10 max-w-full">
            {tracks.map(track =>
            <div className="">
                <div>
                    <strong>{track.title}</strong><br />
                    <span>{track.artist}</span>
                </div>
                <audio key={track.key} className="dropbox-embed" controls preload="auto">
                    <source src={track.url} type={track.type} />
                </audio>
            </div>
            )}
        </div>
    )
}
