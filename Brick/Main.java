import javax.swing.*;
/**
 * 主类 Main，用于启动砖块破坏者游戏窗口
 * 该类包含程序的入口点 main 方法
 */
public class Main {
    public static void main(String[] args) {
        // 创建一个名为 "Brick Breaker Game" 的 JFrame 窗口
         JFrame frame = new JFrame("Brick Breaker Game");
         GamePanel game = new GamePanel();
         frame.add(game);
         frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        // 设置窗口关闭操作为退出程序
         frame.setResizable(false);
        // 设置窗口不可调整大小
         frame.pack();
        // 自动调整窗口大小以适应其添加的组件
         frame.setLocationRelativeTo(null);
        // 将窗口居中显示
         frame.setVisible(true);

    }
}