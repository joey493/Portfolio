const LandingSec = () => {
    return (
        <section className='landing'>
            <div className='container'>
                <div className='small-breif'>
                    <p>Hi,I'm</p>
                    <h1 className='h1'><span>Ibrahim</span> Nader</h1>
                    <p>Front-end <span>Developer</span></p>
                    <div>
                        <button className='btn main-btn'>Resume</button>
                        <button className='btn sec-btn'>Projects</button>
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