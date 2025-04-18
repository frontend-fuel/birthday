// Intro Page to Birthday Wishes
setTimeout(function() {
    document.getElementById('introPage').style.display = 'none';
    document.getElementById('wishesPage').style.display = 'block';
}, 3000); // 3 seconds for intro

// Show the first image section
document.getElementById('moreButton').onclick = function() {
    document.getElementById('wishesPage').style.display = 'none';
    document.getElementById('imageSection1').style.display = 'block';
};

// Show the second image section when "Next" is clicked
document.getElementById('nextButton1').onclick = function() {
    document.getElementById('imageSection1').style.display = 'none';
    document.getElementById('imageSection2').style.display = 'block';
};

// Final transition when "Next" is clicked on the last image section
document.getElementById('nextButton2').onclick = function() {
    alert('Thank you for celebrating! 🎉');
};
