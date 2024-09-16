# Overview
Interactive AI Application with Teachable Machine and P5.js called Recycle Buddy. Created for the class LMC 8803 GM1 AI 4 DM taught by Brian Magerko and Manoj Deshpande at Georgia Tech.

# Motivation
I wanted to provide a prototype AI model that would help consumers sort through their individual trash and facilitate proper recycling. While simultaneously teaching them through visual indicators when an item is categorized.

# Model Training
Training was done in 3 iterations, due to not having satisfactory results.
1.	Decided on 5 categories, selected at least 1 object per category, produced at least ~30 images per category. All images taken on a white background, both alone and being held by my hand.
    * Almost everything is predicted to be plastic. Nothing is ever categorized as non-recyclable.
2.	Increased training quantity to be at least 10 objects per category, producing at least ~1000 images per category. In addition to the white background, took photos of each object with my face and upper body in the frame as well as a normal room background.
    * Plastic and glass now get interchangeably labeled, depending on objects angle.
    * Large improvement in non-recyclable
    * I realized having me in the frame with my glasses on was confusing for the model, because it wanted to classify my glasses as sometimes plastic and other times glass. Without them I was consistently categorized as non-recyclable.
3.	Added training data from a Kaggle dataset called TrashNet, which had 400-500 samples of glass, paper, cardboard, plastic, and metal. It also had 137 samples of trash. Like my first training attempt, all of these additional images were taken on a white background.
    * Source: https://www.kaggle.com/datasets/feyzazkefe/trashnet
    * Although accuracy decreased for detecting objects on a normal background (with me in the frame), every other scenario, accuracy went up.

# Resources
1. In class lab exercise
2. https://p5js.org/reference/
3. https://www.w3schools.com/css/
4. https://teachablemachine.withgoogle.com/faq
5. https://www.kaggle.com/datasets/feyzazkefe/trashnet
6. https://happycoding.io/tutorials/p5js/web-dev 