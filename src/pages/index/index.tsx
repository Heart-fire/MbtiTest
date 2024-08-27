import { View, Text } from "@tarojs/components";
import {AtBadge, AtButton} from "taro-ui";
import "./index.scss";

export default () => {
  //ESLint 校验JS语法的
    return (
      <View className="index">
        <Text>Hello world!</Text>
        <AtButton type="primary">I need Taro UI</AtButton>
        <Text>Taro UI 支持 Vue 了吗？</Text>
        <AtButton type="primary" circle>
          支持
        </AtButton>
        <Text>共建？</Text>
        <AtButton type="secondary" circle>
          来
        </AtButton>
        <AtBadge value={10} maxValue={99}>
          <AtButton size="small">按钮</AtButton>
        </AtBadge>
      </View>
    );
}
