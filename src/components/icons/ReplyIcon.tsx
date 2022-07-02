export default function ReplyIcon({invert = false}:{invert?:boolean}){

    const style = {width: '1em', height: '1em'};

    if(invert) {
        return (
            <svg style={{...style, transform: 'rotate(-90deg)'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M313.6 392.3l-104 112c-9.5 10.23-25.69 10.23-35.19 0l-104-112c-6.484-6.984-8.219-17.17-4.406-25.92S78.45 352 88 352H160V80C160 71.19 152.8 64 144 64H32C14.33 64 0 49.69 0 32s14.33-32 32-32h112C188.1 0 224 35.88 224 80V352h72c9.547 0 18.19 5.656 22 14.41S320.1 385.3 313.6 392.3z"/>
            </svg>
        );
    }

    return (
        <svg xmlns="http://www.w3.org/2000/svg" style={style}  fill="none" viewBox="0 0 24 24"
             stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/>
        </svg>
    );
}
