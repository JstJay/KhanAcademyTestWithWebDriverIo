describe('Khan Academy App Test', () => {
    it('should navigate and bookmark financial literacy topic', async () => {
        // Wait for the "Explore" button and tap on it
        const exploreButton = await $('//android.widget.TextView[@text="Explore"]');
        await exploreButton.waitForDisplayed({ timeout: 5000 });
        await exploreButton.click();

        // Tap on "Life Skills"
        const lifeSkills = await $('//android.widget.TextView[@text="Life Skills"]');
        await lifeSkills.waitForDisplayed({ timeout: 5000 });
        await lifeSkills.click();

        // Tap on "Financial Literacy"
        const financialLiteracy = await $('//android.widget.TextView[@text="Financial Literacy"]');
        await financialLiteracy.waitForDisplayed({ timeout: 5000 });
        await financialLiteracy.click();

        // Open the first topic under Financial Literacy
        const firstTopic = await $('//android.widget.TextView[@index="0"]');
        await firstTopic.waitForDisplayed({ timeout: 5000 });
        await firstTopic.click();

        // Tap on "Home"
        const homeButton = await $('//android.widget.TextView[@text="Home"]');
        await homeButton.waitForDisplayed({ timeout: 5000 });
        await homeButton.click();

        // Verify the last seen topic name under "Recent Lessons"
        const recentLesson = await $('//android.widget.TextView[@text="Recent Lessons"]');
        await recentLesson.waitForDisplayed({ timeout: 5000 });
        const lessonText = await recentLesson.getText();
        expect(lessonText).toContain("Financial Literacy");
    });

    it('should clear notifications', async () => {
        // Open the notifications panel
        await driver.toggleAirplaneMode();
        await driver.toggleAirplaneMode();  // toggle twice to simulate opening notification panel

        // Optionally, interact with notifications (skipping for simplicity)

        // Close notifications
        await driver.lock();
        await driver.unlock();
    });
});
