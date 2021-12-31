import Typewriter from 'typewriter-effect'

const LandingSec = () => {
    return (
        <section className='landing' id='home'>
            <div className='container'>
                <div className='small-breif'>
                    <p>Hi,I'm</p>
                    <h1 className='h1'><span>Ibrahim</span> Nader</h1>

                    <Typewriter onInit={(typewriter) => {
                        typewriter.typeString('Front-end ')
                            .start().pauseFor(1500)
                            .typeString(`<span>Developer</span>`)
                            .pauseFor(1000)
                            .callFunction(() => {
                                document.querySelector('.Typewriter__cursor').style.display = 'none'
                            })
                    }} />

                    <div>
                        <a href='https://drive.google.com/file/d/1sW2t3TYgmVB1JGQq5csS2S54KPz9VVOJ/view' className='btn main-btn' data-txt='Resume'><span>Resume</span></a>
                        <a href='#projects' className='btn sec-btn' data-txt='Projects'><span>Projects</span></a>
                    </div>
                </div>
                <div className='my-photo'>
                    <div className='img'></div>
                </div>
            </div>
        </section >
    )
}

export default LandingSec;