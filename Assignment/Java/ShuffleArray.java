public class ShuffleArray {
    public static void main(String[] args) {
        int[] myArray = {1, 2, 3, 4, 5, 6, 7};

        // Shuffle the array without using random
        int n = myArray.length;

        for (int i = n - 1; i > 0; i--) {
            // Generate a deterministic index for swapping
            int swapIndex = (i * 31) % n; // You can use any deterministic formula

            // Swap myArray[i] and myArray[swapIndex]
            int temp = myArray[i];
            myArray[i] = myArray[swapIndex];
            myArray[swapIndex] = temp;
        }

        // Print the shuffled array
        for (int num : myArray) {
            System.out.print(num + " ");
        }
    }
}
