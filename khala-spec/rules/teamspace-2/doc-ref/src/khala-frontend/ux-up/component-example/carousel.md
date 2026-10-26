# Carousel 走马灯
在有限空间内，循环播放同一类型的图片、文字等内容。
## Carousel的基础用法
 结合使用 `ux-carousel` 和 `ux-carousel-item` 标签就得到了一个走马灯。幻灯片的内容是任意的，需要放在 `ux-carousel-item` 标签中。默认情况下，在鼠标 `hover` 底部的指示器时就会触发切换。通过设置 `trigger` 属性为 `click`，可以达到点击触发的效果。
```vue
<template>
    <div>
        <div>
            <div>默认 Hover 指示器触发</div>
            <ux-carousel height="150px">
                <ux-carousel-item v-for="item in 4" :key="item" :label="item">
                    <h3>{{ item }}</h3>
                </ux-carousel-item>
            </ux-carousel>
        </div>
        <div>
            <div>Click 指示器触发</div>
            <ux-carousel trigger="click" height="150px">
                <ux-carousel-item v-for="item in 4" :key="item">
                    <h3>{{ item }}</h3>
                </ux-carousel-item>
            </ux-carousel>
        </div>
    </div>
</template>

```

## Carousel的动态模糊
 启用动态模糊增强了走马灯的活力和流畅性。 `motion-blur` 的默认值是 `false`，手动激活此功能即可提供视觉感受上的提升。
```vue
<template>
    <div>
        <div>
            <div>默认展示</div>
            <ux-carousel height="150px" motion-blur>
                <ux-carousel-item v-for="item in 4" :key="item">
                    <h3>{{ item }}</h3>
                </ux-carousel-item>
            </ux-carousel>
        </div>
        <div>
            <div>垂直展示</div>
            <ux-carousel height="150px" direction="vertical" motion-blur :autoplay="false">
                <ux-carousel-item v-for="item in 4" :key="item">
                    <h3>{{ item }}</h3>
                </ux-carousel-item>
            </ux-carousel>
        </div>
    </div>
</template>

```

## Carousel的指示器
可以将指示器的显示位置设置在容器外部

 `indicator-position` 属性定义了指示器的位置。 默认情况下，它会显示在走马灯内部，设置为 `outside` 则会显示在外部；设置为 `none` 则不会显示指示器。
```vue
<template>
    <div>
        <ux-carousel indicator-position="outside">
            <ux-carousel-item v-for="item in 4" :key="item">
                <h3>{{ item }}</h3>
            </ux-carousel-item>
        </ux-carousel>
    </div>
</template>

```

## Carousel的切换箭头
可以设置切换箭头的显示时机

 `arrow` 属性定义了切换箭头的显示时机。默认情况下，切换箭头只有在鼠标 `hover` 到走马灯上时才会显示；若将 `arrow` 设置为 `always`，则会一直显示；设置为 `never`，则会一直隐藏。
```vue
<template>
    <div>
        <ux-carousel :interval="5000" arrow="always">
            <ux-carousel-item v-for="item in 4" :key="item">
                <h3>{{ item }}</h3>
            </ux-carousel-item>
        </ux-carousel>
    </div>
</template>

```

## Carousel的自动高度
 设置 `height` 设置为 `auto`时， `carousel` 的高度将根据子内容的高度自动设置。
```vue
<template>
    <div>
        <div>
            <div>每一个 carousel-item 的高度都不一样</div>
            <ux-carousel height="auto" autoplay>
                <ux-carousel-item>
                    <h3>height 100px</h3>
                </ux-carousel-item>
                <ux-carousel-item>
                    <h3>height 200px</h3>
                </ux-carousel-item>
                <ux-carousel-item>
                    <h3>height 300px</h3>
                </ux-carousel-item>
            </ux-carousel>
        </div>
    </div>
</template>

```

## Carousel的卡片模式
当页面宽度方向空间空余，但高度方向空间匮乏时，可使用卡片风格

 将 `type` 属性设置为 `card` 即可启用卡片模式。从交互上来说，卡片模式和一般模式的最大区别在于，可以通过直接点击两侧的幻灯片进行切换。
```vue
<template>
    <div>
        <ux-carousel :interval="4000" type="card" height="200px" :autoplay="false">
            <ux-carousel-item v-for="item in 6" :key="item">
                <h3>{{ item }}</h3>
            </ux-carousel-item>
        </ux-carousel>
    </div>
</template>

```

## Carousel的垂直排列
 默认情况下，`direction` 为 `horizontal`，即水平方向显示。通过设置 `direction` 为 `vertical` 来让走马灯在垂直方向上显示。
```vue
<template>
    <div>
        <div>
            <div>
                <div>默认垂直布局</div>
                <ux-carousel direction="vertical" height="150px" :autoplay="false">
                    <ux-carousel-item v-for="item in 4" :key="item">
                        <h3>{{ item }}</h3>
                    </ux-carousel-item>
                </ux-carousel>
            </div>
        </div>
        <div>
            <div>
                <div>卡片垂直布局</div>
                <ux-carousel direction="vertical" type="card" :autoplay="false">
                    <ux-carousel-item v-for="item in 4" :key="item">
                        <h3>{{ item }}</h3>
                    </ux-carousel-item>
                </ux-carousel>
            </div>
        </div>
    </div>
</template>
```

