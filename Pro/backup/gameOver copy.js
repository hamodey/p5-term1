function gameOver(){    
    background(0, 0, 0);
    fill(255, 150, 150);
    textSize(12);
    text("GAME OVER", width / 2 - 51, height / 2 - 20);
    text("PRESS R TO REFRESH", width / 2 - 80, height / 2);
    text("YOUR HITS:" + kCounter, width / 2 - 51, height / 2 + 20);
    text("YOUR SCORE:" + floor(kCounter / 3), width / 2 - 51, height / 2 + 40);
    text("YOUR SHOTS:" + counter, width / 2 - 51, height / 2 + 60);
}