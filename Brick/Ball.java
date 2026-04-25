import java.awt.*;
public  class Ball extends Rectangle {
    int xVelocity;
    int yVelocity;

    private final int SPEED = 3;
    private final int BOARD_WIDTH;
    private final int BOARD_HEIGHT;

    public Ball(int boardWidth, int boardHeight) {
        super(boardWidth / 2 - 10, boardHeight / 2 - 10, 20, 20);

        this.BOARD_WIDTH = boardWidth;
        this.BOARD_HEIGHT = boardHeight;

        //随机方向
        int randomXDir = Math.random() > 0.5 ? -1 : 1;
        int randomYDir = Math.random() > 0.5 ? -1 : 1;

        xVelocity = randomXDir * SPEED;
        yVelocity = randomYDir * SPEED;
    }

    public void move() {
        x += xVelocity;
        y += yVelocity;
    }

    //和边界碰撞检测
    public void checkWallCollision() {
        //左墙碰撞
        if (x <= 0) {
            x = 0;
            xVelocity = -xVelocity;
        }

        //右墙碰撞
        if (x + width >= BOARD_WIDTH) {
            x = BOARD_WIDTH - width;
            xVelocity = -xVelocity;
        }

        //上墙碰撞
        if (y <= 0) {
            y = 0;
            yVelocity = -yVelocity;
        }
    }

    public void draw(Graphics g) {
        g.setColor(Color.WHITE);
        g.fillOval(x, y, width, height);
        g.setColor(Color.gray);
        g.drawOval(x, y, width, height);
    }
}

