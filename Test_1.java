import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Test_1 {
    public static void main(String[] args) {
        test_1(new int[]{11, 2, 8, 10, 5, 99, 1 , 8, 9}, 3);
        test_2(new int[]{1,2,3,2,6,4,24,1,28,1,4});
        test_3(new int[]{1,2,3,5,6,9,24,17,28,7,16});
    }

    public static void test_1(int[] ar, int n) {
        int i = 0;
        int index = 0;
        int index1 = 0;
        int total = ar.length;
        int[] newAr = new int[ar.length];
        for (int j = 0; j < ar.length; j++) {
            newAr[j] = ar[(i+n*index1)];
            index++;
            index1++;
            if (index == n) {
                index = 0;
            }
            if (index1 == 3) {
                i++;
                index1=0;
            }
        }
        System.out.println("test 1:"+Arrays.toString(newAr));
    }

    public static void test_2(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
        for (int j = i+1; j < arr.length - 1; j++) {
            if (arr[i] > arr[j]) {
                int a = arr[i];
                arr[i] = arr[j];
                arr[j] = a;
            }
            }
        }
        System.out.println("Test 2: " + (arr[arr.length-1] + arr[arr.length-2]));
    }
    public static void test_3(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            for (int j = i+1; j < arr.length - 1; j++) {
                if (arr[i] > arr[j]) {
                    int a = arr[i];
                    arr[i] = arr[j];
                    arr[j] = a;
                }
            }
        }
        int min = arr[2]-arr[1];
        for (int i = 1; i < arr.length-1; i++) {
            if (min > (arr[i] - arr[i-1])) {
                min = (arr[i+1] - arr[i]);
            }
        }
        List<int[]> output = new ArrayList<>();
        int leg = 0;
        for (int i = 0; i < arr.length-1; i++) {
            if (arr[i+1]-arr[i] == min) {
                output.add(new int[]{arr[i+1],arr[i]});
            }
        }
        System.out.println("Test 3:" + output);
    }
}
