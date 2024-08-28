import { Image, View } from "@tarojs/components";
import { AtButton } from "taro-ui";
import Taro from "@tarojs/taro";
import headerBg from "../../assets/headerBg.jpg";
import "./index.scss";
import { getBestQuestionResult } from "../../utils/bizUtils";
import GlobalFooter from "../../components/GlobalFooter";
import questions from "../../data/question.json";
import questionResults from "../../data/questions_results.json";

// 查询结果页
export default () => {
  // 获取答案
  const answerList = Taro.getStorageSync("answerList");
  if (!answerList || answerList.length < 1) {
    Taro.showToast({
      title: "答案为空",
      icon: "error",
      duration: 3000,
    });
  }
  // 获取测试结果
  const result = getBestQuestionResult(answerList, questions, questionResults);

  return (
    <View className="resultPage">
      <View className="at-article__h1 title">{result.resultName}</View>
      <View className="at-article__h2 subTitle">{result.resultDesc}</View>
      <AtButton
        type="primary"
        circle
        className="enterBtn"
        onClick={() => {
          Taro.reLaunch({
            url: "/pages/index/index",
          });
        }}
      >
        返回主页
      </AtButton>
      <Image src={headerBg} style={{ width: "100%" }} mode="aspectFill" />
      <GlobalFooter />
    </View>
  );
};
