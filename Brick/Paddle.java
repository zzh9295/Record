import java.awt.*;

public class Paddle extends Rectangle {    
    int xVelocity;
    private final int SPEED = 10;
    private final int BOARD_WIDTH;
    
    // 新增：记录按键状态
    private boolean leftPressed = false;
    private boolean rightPressed = false;

    /**
     * Paddle类的构造函数
     * @param boardWidth 游戏区域的宽度
     * @param boardHeight 游戏区域的高度
     */
    public Paddle(int boardWidth, int boardHeight) {
        super(boardWidth/2 - 50, boardHeight - 60, 100, 15);
        this.BOARD_WIDTH = boardWidth;
    }

    /**
     * 设置左键是否被按下
     * @param left 左键状态
     */
    public void setLeft(boolean left) {
        this.leftPressed = left;
        updateVelocity();
    }

    /**
     * 设置右键是否被按下
     * @param right 右键状态
     */
    public void setRight(boolean right) {
        this.rightPressed = right;
        updateVelocity();
    }

    // 新增：根据按键状态统一更新速度
    private void updateVelocity() {
        if (leftPressed && rightPressed) {
            xVelocity = 0; // 同时按下时左右抵消
        } else if (leftPressed) {
            xVelocity = -SPEED;
        } else if (rightPressed) {
            xVelocity = SPEED;
        } else {
            xVelocity = 0;
        }
    }

    public boolean isMovingRight() {
        return xVelocity > 0;
    }

    public boolean isMovingLeft() {
        return xVelocity < 0;
    }

    public void move() {
        x += xVelocity;
        if (x < 0) {
            x = 0;
        }
        if (x + width > BOARD_WIDTH) {
            x = BOARD_WIDTH - width;
        }
    }

    public void draw(Graphics g) {
        g.setColor(Color.BLUE);
        g.fillRect(x, y, width, height);

        g.setColor(Color.WHITE);
        g.drawRect(x, y, width, height);
    }
}