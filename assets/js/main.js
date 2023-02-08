//VARIABLE
const imageFocusDiv = document.getElementById("imageFocus");
const searchDiv = document.getElementById("searchScreen");
const newPostDiv = document.getElementById("newPost");
const deletePostDiv = document.getElementById("deletePost");


//EVENTS
    //Close Popup
    function closePopUp(popup){
        document.querySelectorAll('.closePopup').forEach((btn) => {
            btn.addEventListener('click', (event) => {
                event.preventDefault();
                popup.classList.remove('active');
            })
        })
    }

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
                    //CLOSE SEARCH
                    searchDiv.classList.remove('active');
                });
            });
        };

    //Follow button
        function follow(){
            document.querySelectorAll('.follow').forEach((btn) => {
                btn.addEventListener('click', (event) => {
                    event.currentTarget.src="assets/images/icon/search.svg";
                    alert("Ajouté à vos abonnements!");
                });
            });
        };

    //Image focus
        function imageFocus(){
            document.querySelectorAll('.zoomable').forEach((img) => {
                img.addEventListener('click', (event) => {
                    imageFocusDiv.classList.add('active');
                    document.querySelector('#imageFocused').src=event.currentTarget.src;
                    imageFocusDiv.addEventListener('click', (event) => {
                        imageFocusDiv.classList.remove('active');
                    })
                });
            });
        };

    //Search pannel
        function searchPannel(){
            document.querySelectorAll('.search').forEach((btn) => {
                btn.addEventListener('click', (event) => {
                    event.preventDefault();
                    searchDiv.classList.toggle('active');
                    searchDiv.addEventListener('click', (event) => {
                        if(event.target.tagName != 'FORM' && event.target.tagName != 'INPUT'){
                             searchDiv.classList.remove('active');
                        }
                    })
                });
            });
        };

    //New Post pannel
        function newPostPannel(){
            document.querySelectorAll('.new_post').forEach((btn) => {
                btn.addEventListener('click', (event) => {
                    event.preventDefault();
                    newPostDiv.classList.toggle('active');
                    newPostDiv.addEventListener('click', (event) => {
                        if(event.target.tagName == 'DIV'){
                             newPostDiv.classList.remove('active');
                        }
                    })
                    closePopUp(newPostDiv);
                });
            });
        };

    //Delete pannel
        function deletePannel(){
            document.querySelectorAll('.delete').forEach((btn) => {
                btn.addEventListener('click', (event) => {
                    event.preventDefault();
                    deletePostDiv.classList.toggle('active');
                    deletePostDiv.addEventListener('click', (event) => {
                        if(event.target.tagName == 'DIV'){
                             deletePostDiv.classList.remove('active');
                        }
                    })
                    closePopUp(deletePostDiv);
                });
            });
        };


//Main code
openNav();
selectCategory();
follow();
imageFocus();
searchPannel();
newPostPannel();
deletePannel();