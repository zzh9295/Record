import java.awt.*;
import java.awt.event.*;  // 新增：ActionEvent 在这个包下
import javax.swing.*;

/**
 * GamePanel 类是一个继承自JPanel的面板类，实现了ActionListener接口
 * 用于创建游戏的主面板，包含游戏的基本设置和绘制功能
 */
public class GamePanel extends JPanel implements ActionListener {
    // 定义游戏面板的宽度和高度常量
    public static final int BOARD_WIDTH = 800;
    public static final int BOARD_HEIGHT = 600;

    private Timer timer; // 用于控制游戏循环的定时器
    /**
     * GamePanel的构造方法
     * 设置面板的基本属性，包括大小、背景色等，并启动定时器
     */
    public GamePanel() {
        // 设置面板大小
        this.setPreferredSize(new Dimension(BOARD_WIDTH, BOARD_HEIGHT));
        // 设置面板背景色
        this.setBackground(Color.LIGHT_GRAY);
        // 使面板可以获得焦点
        this.setFocusable(true);

        // 创建一个定时器，每100毫秒触发一次ActionEvent
        timer = new Timer(100,this);
        // 启动定时器
        timer.start();
    }

    /**
     * ActionListener接口的方法实现
     * 当定时器触发时调用，用于更新游戏状态
     * @param e ActionEvent事件对象
     */
    @Override
    public void actionPerformed(ActionEvent e) {
        System.out.println("actionPerformed 触发"); 
        repaint(); // 请求重绘面板
    }
    /**
     * 重写paintComponent方法，用于绘制游戏画面
     * @param g 图形上下文对象
     */
    @Override
    protected void paintComponent(Graphics g) {
        super.paintComponent(g); // 调用父类的paintComponent方法
        // 设置绘制颜色为白色
        g.setColor(Color.WHITE);
        // 设置字体为Arial，粗体，大小30
        g.setFont(new Font("Arial",Font.BOLD,30));
        // 在面板上绘制游戏标题
        g.drawString("Brick Breaker Game", 300, 300);
    }

}