import { Text, View } from "react-native"

import { Link } from "@/components/generic/link"
import { ScreenLayout } from "@/components/generic/screen-layout"

export default function Index() {
  return (
    <ScreenLayout
      customHeader={<Link href="/" text="Go back to home" withBackIcon />}>
      <View className="flex flex-1 items-center justify-center">
        <Text className="text-3xl text-white">Lottie animations</Text>
      </View>
    </ScreenLayout>
  )
}
