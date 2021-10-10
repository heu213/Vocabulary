const $ = document.querySelector.bind(document)
const $$ = document.querySelector.bind(document)

var currentIndex = 0

const vocabularys = [
    {
        id: 1,
        vocabulary: 'abide by',
        means: 'Tuân theo',
        image: 'https://64.media.tumblr.com/023b3f8c53c3c42b68de422961b083cc/tumblr_oq057uTo5H1qbd81ro1_1280.jpg',
        explain: 'to accept and act according to a law, an agreement',
        partOfSpeech: 'verb',
        example: 'The two parties agreed to abide by the judges decision',
        meansOfExample: 'Hai bên đã đồng ý tuân theo quyết định của tòa án.',
        audio: 'https://aredir.nixcdn.com/NhacCuaTui924/Nevada-Vicetone-4494556.mp3'
    },
    {
        id: 1,
        vocabulary: 'abide byy',
        means: 'Tuân theo',
        image: 'https://64.media.tumblr.com/d1b06afb69cf8b615690ff734129e902/f04605d2cb559bfc-d8/s1280x1920/f91d82446d71c5ee9ace99af4936adcd5549d93f.jpg',
        explain: 'to accept and act according to a law, an agreement',
        partOfSpeech: 'verb',
        example: 'The two parties agreed to abide by the judges decision',
        meansOfExample: 'Hai bên đã đồng ý tuân theo quyết định của tòa án.',
        audio: 'https://aredir.nixcdn.com/NhacCuaTui924/Nevada-Vicetone-4494556.mp3'
    },

    {
        id: 2,
        vocabulary: 'abide bys',
        means: 'Hiếu đẹp trai',
        image: 'https://64.media.tumblr.com/13d23b5e402069f9cb2bf7a02b0c89f5/tumblr_oq9eemh7Z91qbd81ro1_1280.jpg',
        explain: 'to accept and act according to a law, an agreement',
        partOfSpeech: 'verb',
        example: 'The two parties agreed to abide by the judges decision',
        meansOfExample: 'Hai bên đã đồng ý tuân theo quyết định của tòa án.',
        audio: 'https://aredir.nixcdn.com/NhacCuaTui924/Nevada-Vicetone-4494556.mp3'



    }]


function loadCurrent() {
    $("#myImg").setAttribute("src", vocabularys[currentIndex].image)
    $('.modal-label').textContent = vocabularys[currentIndex].means
}

function loadCurrentKnow() {
    $("#myImg2").setAttribute("src", vocabularys[currentIndex].image)
    $('.Vocavulary__list-vocabulary').textContent = vocabularys[currentIndex].vocabulary
    $('.explain').textContent = vocabularys[currentIndex].explain
    $('.partOfSpeech').textContent = vocabularys[currentIndex].partOfSpeech
    $('.example').textContent = vocabularys[currentIndex].example
    $('.meansOfExample').textContent = vocabularys[currentIndex].meansOfExample
    $("#myMusic").setAttribute("src", vocabularys[currentIndex].audio)
}
function setTime() {

}
//Sự kiện 
function showVocabulary() {
    $('.modal').classList.add('shows')
}
function removeshowVocabulary() {
    $('.modal').classList.remove('shows')

}
function removeActive() {
    $('.Vocabulary-list').classList.remove('active')
}
$('.modal-close').addEventListener('click', removeshowVocabulary)
$('.modal').addEventListener('click', removeshowVocabulary)

$('.modal-container').addEventListener('click', function (e) {
    e.stopPropagation()
})

$('#btn-submit').onclick = function () {
    if (document.getElementById("modalInput").value == vocabularys[currentIndex].vocabulary) {
        currentIndex++
        showVocabulary()
        document.getElementById("modalInput").value = ''
    }
    if (currentIndex >= vocabularys.length) {
        currentIndex = 0

    }
    removeActive()
    loadCurrent()
}

$('#btn-Now').onclick = function () {
    $('.Vocabulary-list').classList.add('active')
    $('.Vocabulary-list').scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
    loadCurrentKnow()
}
$('#btn-Exit').addEventListener('click', removeActive)

$('.pre').onclick = function () {
    currentIndex--
    if (currentIndex < 0) {
        currentIndex = vocabularys.length - 1

    }
    loadCurrent()
    removeshowVocabulary()
}
$('.nextTo').onclick = function () {
    removeshowVocabulary()
}

loadCurrent()
loadCurrentKnow()




