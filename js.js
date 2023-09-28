const api_url="https://api.quotable.io/quotes/random?minLength=100&maxLength=140";
const api_twitter="https://twitter.com/intent/tweet";
const Qoute=document.getElementById('qoute')
const author=document.getElementById('author');
const btn=document.getElementById('newqoute');
const twitter=document.getElementById('tweetit');

async function getqoute()
{
    const request=await fetch (api_url);
    var data=await request.json();
    Qoute.innerHTML=data[0].content;
    author.innerHTML=data[0].author;
}

btn.addEventListener('click',function(){
    getqoute(api_url);
})

twitter.addEventListener('click',tweet)

function tweet()
{
    window.open(api_twitter)
}