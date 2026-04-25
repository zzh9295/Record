import java.awt.*;
import java.awt.event.*;  // 新增：ActionEvent 在这个包下
import javax.swing.*;

/**
 * GamePanel 类是一个继承自JPanel的面板类，实现了ActionListener接口
 * 用于创建游戏的主面板，包含游戏的基本设置和绘制功能
 */
public class GamePanel extends JPanel implements ActionListener,KeyListener {
    // 定义游戏面板的宽度和高度常量
    public static final int BOARD_WIDTH = 800;
    public static final int BOARD_HEIGHT = 600;

    private Timer timer;
    private Paddle paddle;
    private Ball ball;
    public GamePanel() {
        // 设置面板大小
        this.setPreferredSize(new Dimension(BOARD_WIDTH, BOARD_HEIGHT));
        // 设置面板背景色
        this.setBackground(Color.LIGHT_GRAY);
        // 使面板可以获得焦点
        this.setFocusable(true);
        this.addKeyListener(this);

        paddle = new Paddle(BOARD_WIDTH, BOARD_HEIGHT);
        ball = new Ball(BOARD_WIDTH, BOARD_HEIGHT);

        timer = new Timer(10,this);
        // 启动定时器   
        timer.start();
    }
    @Override
    public void actionPerformed(ActionEvent e) {
        paddle.move(); // 移动挡板
        ball.move(); // 移动小球
        ball.checkWallCollision(); // 检测小球是否碰到墙壁
        repaint(); // 请求重绘面板
    }

    @Override
    protected void paintComponent(Graphics g) {
        super.paintComponent(g); // 调用父类的paintComponent方法
        paddle.draw(g); // 绘制挡板
        ball.draw(g); // 绘制小球
    }

    @Override
    public void keyPressed(KeyEvent e) {
        switch (e.getKeyCode()) {
            case KeyEvent.VK_LEFT:
            case KeyEvent.VK_A:
                paddle.setLeft(true);
                break;
            case KeyEvent.VK_RIGHT:
            case KeyEvent.VK_D:
                paddle.setRight(true);
                break;
        } 
    }
    @Override
    public void keyReleased(KeyEvent e) {
         switch (e.getKeyCode()) {
            case KeyEvent.VK_LEFT:
            case KeyEvent.VK_A:
                paddle.setLeft(false);
                break;
            case KeyEvent.VK_RIGHT:
            case KeyEvent.VK_D:
                paddle.setRight(false);
                break;
        } 
    }
    @Override
    public void keyTyped(KeyEvent e) {
        
    }

}