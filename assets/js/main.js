//EVENTS
//Open nav
    function openNav(){
        document.querySelectorAll('.mobile_nav').forEach((btn) => {
            btn.addEventListener('click', (event) => {
                event.currentTarget.parentElement.classList.toggle('open');
            });
        });
    };
    
//Category
    function selectCategory(){
        document.querySelectorAll('.category').forEach((category) => {
            category.addEventListener('click', (event) => {
                event.preventDefault();
                //SET COLOR LINK TO CATEGORY
                if (event.currentTarget.id=="Actualites"){
                    document.documentElement.style.setProperty('--main-color', '#4472C4');
                } else if (event.currentTarget.id=="Voyages") {
                    document.documentElement.style.setProperty('--main-color', '#FFA500');
                } else if (event.currentTarget.id=="Musique") {
                    document.documentElement.style.setProperty('--main-color', '#70AD47');
                } else if (event.currentTarget.id=="Art") {
                    document.documentElement.style.setProperty('--main-color', '#C84084');
                } else if (event.currentTarget.id=="Humour") {
                    document.documentElement.style.setProperty('--main-color', '#F9D314');
                } else if (event.currentTarget.id=="ModeBeaute") {
                    document.documentElement.style.setProperty('--main-color', '#9552C6');
                } else if (event.currentTarget.id=="Sports") {
                    document.documentElement.style.setProperty('--main-color', '#15B15C');
                } else if (event.currentTarget.id=="Technologies") {
                    document.documentElement.style.setProperty('--main-color', '#727272');
                } else if (event.currentTarget.id=="Divertissement") {
                    document.documentElement.style.setProperty('--main-color', '#FF0000');
                } else if (event.currentTarget.id=="Sciences") {
                    document.documentElement.style.setProperty('--main-color', '#00B0F0');
                }
                //DELETE OLD
                if (document.querySelector('.current')){
                    document.querySelector('.current').classList.remove('current')
                }
                //SET CURRENT
                event.currentTarget.classList.add('current');
                //CLOSE NAV
                let nav = document.querySelector('nav');
                nav.classList.remove('open');
            });
        });
    };


//Main code
openNav();
selectCategory();