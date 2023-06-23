document.addEventListener('DOMContentLoaded', function(){
    renderContent('home');
})
function renderContent(link){
    const contentDiv = document.getElementById('renderedContent');
    contentDiv.innerHTML = '';

    if(link === 'home'){
        contentDiv.innerHTML = `
        <h5>Hello, My name is</h5>
        <h2>Md Fakhrul Hasan</h2>
        <p>I'm highly motivated and diligent MERN stack developer seeking an entry-level position to utilize my skills in web development and contribute to building innovative and user-friendly applications. Eager to learn and grow in a dynamic and challenging environment. And what goes without saying is that I am a hard working person with workaholic nature.</p>
        `
    }else if(link === 'contact'){
        contentDiv.innerHTML = `
        <h2>Contact Information</h2>
        <p>Mobile: +8801827611017</p>
        <p>Email: mdfakhrulh7@gmail.com</p>
        <p>LinkedIn: https://www.linkedin.com/in/md-fakhrul-h7/</p>
        `
    }else if(link === 'information'){
        contentDiv.innerHTML = `
        <h2>This is information</h2>
        `
    }else if(link === 'guide'){
        contentDiv.innerHTML = `
        <h2>This is guide</h2>
        `
    }

    const navLinks = document.getElementsByClassName('sidenav')[0].getElementsByTagName('a');
    for(let i = 0; i<navLinks.length; i++){
        navLinks[i].classList.remove('active');
    }

    document.getElementById(link).classList.add('active');
}