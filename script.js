let images = [ "media/tab1.jpg" , "media/tab2.jpg" , "media/tab3.jpg" , "media/tab4.jpg" ];

let contents = ["Nature is a masterpiece of harmony, where towering mountains touch the sky and rivers carve their paths through lush valleys. The gentle rustling of leaves in the wind and the rhythmic crashing of ocean waves create a soothing melody. Every sunrise paints the sky with hues of gold and pink, while sunsets bring a serene glow, reminding us of the earth’s ever-changing beauty and the delicate balance of life."
                ,"Forests, teeming with diverse wildlife, breathe life into the world, their towering trees offering shade and shelter. Birds sing melodies that echo through the canopy, while streams weave through the undergrowth, nourishing all they touch. Each season brings a new transformation—spring’s blossoms, summer’s warmth, autumn’s golden hues, and winter’s quiet frost—showcasing nature’s endless cycle of renewal and wonder, an ever-changing spectacle that inspires awe and admiration."
                ,"The vast oceans stretch beyond the horizon, their waves whispering secrets of the deep. Beneath the surface, vibrant coral reefs teem with life, a dazzling underwater world of color and movement. The salty breeze carries the scent of adventure, while seagulls glide effortlessly above. The ocean’s tides, pulled by the moon’s unseen force, remind us of nature’s silent power, shaping landscapes and lives with its gentle yet unstoppable rhythm."
                ,"Rolling meadows and endless fields bloom with wildflowers, swaying gracefully in the breeze. Bees and butterflies dance from petal to petal, playing their vital role in the cycle of life. Majestic mountains stand tall in the distance, their peaks dusted with snow, while crystal-clear lakes reflect the boundless sky. Nature’s embrace is both calming and invigorating, offering peace to those who seek its beauty and wisdom to those who listen."];

let image = document.querySelector(".image img");
let headline = document.querySelector(".content h3")
let content = document.querySelector(".content p");
let tabs = document.querySelectorAll(".tab");

tabs[0].classList.add("active");
image.src = images[0];
headline.innerHTML = "Phase 1";
content.innerHTML = contents[0];

tabs.forEach((tab,index) => {
    tab.addEventListener("click", () => {
        tabs.forEach((tab) => {
            tab.classList.remove("active");
        });
        tab.classList.add("active");
        image.src = images[index];
        headline.innerHTML = `Phase ${index+1}`;
        content.innerHTML = contents[index];
    });
});