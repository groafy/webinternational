import './codeSolutions.scss'

export default function CodeSolutions() {
    return (
        <section className='codeSolutions__base'>
            <div className='codeSolutions__gridContainer'>
                <ul className='codeSolutions__grid'>
                    <li className='codeSolutions__gridItem'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="#fff" stroke="#fff" aria-hidden="true" viewBox="0 0 32 32"><path d="m8.27 6.04-.73 3.7h15.03l-.47 2.38H7.05l-.72 3.7h15.03l-.84 4.21-6.05 2-5.25-2 .36-1.83h-3.7L5 22.63l8.69 3.33 10-3.33L27 6.04z"/></svg>
                    </li>
                    <li className='codeSolutions__gridItem'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="#fff" stroke="#fff" aria-hidden="true" viewBox="-1.5 0 24 24"><path d="m16.95 7.04.24-2.63H3.93l.7 8.01h9.18l-.33 3.42-2.95.8-2.94-.8-.2-2.1H4.77l.33 4.17 5.43 1.5h.06v-.01l5.38-1.49.75-8.16H7.06l-.22-2.71zM0 0h21.12L19.2 21.57 10.53 24l-8.61-2.43z"/></svg>
                    </li>
                    <li className='codeSolutions__gridItem'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="#fff" stroke="#fff" viewBox="0 0 512 512"><path fill-rule="evenodd" d="M1 .5C.45.58.49 1.27.53 1.96v508.97c169.37 1.14 340.8.16 510.98.49V.5H1zm258.9 451.67c-11.83 11.92-30.49 18.93-53.44 18.93-37.64 0-58.54-18.34-71.88-43.7a967.71 967.71 0 0 1 39.34-23.8c5.46 15.26 23.89 32.42 44.69 21.86 13.18-6.7 11.66-27.01 11.66-49.06V236.53c-.04-.69-.09-1.38.48-1.46h47.12V352.6c0 42.6 3.04 78.39-17.98 99.57zm210.8-42.25c-2.68 39.88-35.25 61.06-79.17 61.18-43.07.13-70.63-19-87.44-48.56 12.09-8.32 25.78-15.02 38.38-22.82 10.08 15.76 27.53 30.9 53.43 28.65 16.13-1.4 34.85-14.56 24.28-34.48-5.12-9.66-17.51-14.57-28.65-19.43-35.36-15.42-76.83-29.57-72.86-85 1.32-18.5 9.85-31.52 20.88-40.79 11.32-9.5 26.46-15.86 46.63-16.5 36.63-1.18 56.73 15.11 70.43 37.88-11.66 8.89-24.51 16.6-37.4 24.28-4.23-13-24.64-25.66-41.77-17.97-7.79 3.5-14.79 13.76-10.68 26.22 3.66 11.12 18.58 17.2 30.6 22.35 36.35 15.56 76.97 30.76 73.34 84.99z" clip-rule="evenodd"/></svg>
                    </li>
                </ul>
                <ul className='codeSolutions__grid'>
                    <li className='codeSolutions__gridItem'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="#fff" stroke="#fff" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 10.11A1.87 1.87 0 1 1 10.13 12 1.88 1.88 0 0 1 12 10.11M7.37 20c.63.38 2-.2 3.6-1.7a24.22 24.22 0 0 1-1.51-1.9 22.7 22.7 0 0 1-2.4-.4c-.51 2.14-.32 3.61.31 4m.71-5.74-.29-.51a7.91 7.91 0 0 0-.29.86c.27.06.57.11.88.16l-.3-.51m6.54-.76.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9h-1.71c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47h3.42c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7a24.22 24.22 0 0 1 1.51 1.9 22.7 22.7 0 0 1 2.4.36c.51-2.14.32-3.61-.32-4m-.7 5.74.29.51a7.91 7.91 0 0 0 .29-.86c-.27-.06-.57-.11-.88-.16l.3.51m1.45-7c1.47.84 1.63 3.05 1 5.63 2.54.75 4.37 2 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1 5.63s-3.45-.12-5.37-1.95c-1.92 1.83-3.91 2.79-5.38 1.95s-1.62-3-1-5.63c-2.54-.75-4.37-2-4.37-3.68s1.83-2.94 4.37-3.69c-.62-2.58-.46-4.79 1-5.63s3.46.12 5.38 1.95c1.92-1.83 3.91-2.79 5.37-1.95M17.08 12a22.51 22.51 0 0 1 .92 2.26c2.1-.63 3.28-1.53 3.28-2.26S20.07 10.37 18 9.74a22.51 22.51 0 0 1-.92 2.26M6.92 12A22.51 22.51 0 0 1 6 9.74c-2.1.63-3.28 1.53-3.28 2.26S3.93 13.63 6 14.26A22.51 22.51 0 0 1 6.92 12m9 2.26-.3.51c.31 0 .61-.1.88-.16a7.91 7.91 0 0 0-.29-.86l-.29.51M13 18.3c1.59 1.5 3 2.08 3.59 1.7s.83-1.82.32-4a22.7 22.7 0 0 1-2.4.36A24.22 24.22 0 0 1 13 18.3M8.08 9.74l.3-.51c-.31 0-.61.1-.88.16a7.91 7.91 0 0 0 .29.86l.29-.51M11 5.7C9.38 4.2 8 3.62 7.37 4s-.82 1.82-.31 4a22.7 22.7 0 0 1 2.4-.36A24.22 24.22 0 0 1 11 5.7Z"/></svg>
                    </li>
                    <li className='codeSolutions__gridItem'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none" stroke="#fff" viewBox="0 0 24 24"><path fill="#fff" d="M19.11 2H15l-3 4.9L9.43 2H0l12 21L24 2h-4.89ZM3 3.75h2.91L12 14.6l6.09-10.85H21L12 19.5 3 3.75Z"/></svg>
                    </li>
                    <li className='codeSolutions__gridItem'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="#fff" fill-rule="evenodd" d="M18.78 5.2c.04.32.06.66.06 1.03 0 1.76-.16 1.86-3.81 12.41A10 10 0 0 0 18.78 5.2Zm-8.6 5.67-3 8.72a10 10 0 0 0 6.14-.16.9.9 0 0 1-.07-.13l-3.07-8.43Zm6.57-1.38c0-1.23-.44-2.09-.82-2.75-.51-.83-.99-1.52-.99-2.35 0-.92.7-1.77 1.68-1.77h.13A9.99 9.99 0 0 0 1.65 4.5c.63.03 1.49.03 3.3-.1.54-.04.6.75.07.82 0 0-.54.06-1.15.1l3.64 10.82 2.2-6.56-1.56-4.27c-.54-.03-1.05-.1-1.05-.1-.54-.03-.48-.85.06-.82 2.07.16 3.12.17 5.3 0 .54-.03.6.76.06.83 0 0-.54.06-1.14.1l3.61 10.74c1.43-4.77 1.76-5.57 1.76-6.57ZM0 10a10 10 0 0 0 5.64 9L.87 5.93A9.96 9.96 0 0 0 0 10Z"/></svg>
                    </li>
                </ul>
                <ul className='codeSolutions__grid'>
                    <li className='codeSolutions__gridItem'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g clip-path="url(#a)"><path fill="#fff" d="m11.21 0-.36.04a12.03 12.03 0 0 0 0 23.93c.36.04 1.94.04 2.3 0 1.61-.17 2.98-.57 4.32-1.26.21-.1.25-.13.22-.16-.02-.01-.9-1.2-1.95-2.62l-1.92-2.6-2.4-3.55a342.5 342.5 0 0 0-2.43-3.56s-.02 1.58-.02 3.51c0 3.38-.01 3.52-.05 3.6a.43.43 0 0 1-.2.21c-.08.04-.15.05-.5.05H7.8l-.1-.07a.44.44 0 0 1-.17-.17l-.04-.1V7.83l.08-.1a.64.64 0 0 1 .17-.14c.1-.05.14-.05.54-.05.48 0 .56.02.69.15l2.9 4.36c1.55 2.37 3.68 5.6 4.73 7.17l1.9 2.88.1-.06a11.95 11.95 0 0 0 5.29-11.8A12.05 12.05 0 0 0 13.17.05C12.96 0 11.41-.01 11.21 0Zm4.92 7.27c.1.05.2.16.23.27.02.06.03 1.37.02 4.3v4.23l-.75-1.15-.74-1.14v-3.06c0-1.98 0-3.1.02-3.15a.48.48 0 0 1 .23-.3c.1-.05.13-.05.5-.05.35 0 .4 0 .49.05Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></svg>
                    </li>
                </ul>
            </div>
            <div className='codeSolutions__textContainer'>
                <h1 className='codeSolutions__textTitle d2'>Programming <span className='text--primary textcontentshadow' data-title="solutions">solutions</span></h1>
                <p className='introText'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, perspiciatis. Numquam omnis, eveniet earum cupiditate voluptatem autem quo ea odit consequuntur quibusdam veritatis placeat. Animi quo dignissimos dolor necessitatibus exercitationem. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, perspiciatis. Numquam omnis, eveniet earum cupiditate voluptatem autem quo ea odit consequuntur quibusdam veritatis placeat. Animi quo dignissimos dolor necessitatibus exercitationem.
                </p>
                <button className='codeSolutions__textCtaLink btn btn--primary'>Contact us</button>
            </div>
        </section>
    )
}