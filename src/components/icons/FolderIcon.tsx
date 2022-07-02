export default function FolderIcon({filled = false} : {filled?: boolean}) {
    if(filled) {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" style={{width: '1em', height: '1em'}} viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/>
            </svg>
        );
    }

    return (
        <svg xmlns="http://www.w3.org/2000/svg" style={{width: '1em', height: '1em'}} fill="none" viewBox="0 0 24 24"
             stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"/>
        </svg>
    )
}
