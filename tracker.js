console.log('Posthog event tracker - loaded');

function trackLinkClick(event) {
  var clickedLink = event.target.href;
  
  var keywords = ['hotmart', 'kiwify', 'eduzz', 'guru', 'pay'];
  var containsKeyword = keywords.some(function(keyword) {
    return clickedLink.includes(keyword);
  });
  
  if (containsKeyword) {
    console.log('Clicked Checkout Button');
    posthog.capture('Clicked Checkout Button');
  }
}

var links = document.querySelectorAll('a');

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', trackLinkClick);
}