import { Linking } from "react-native";

export const openWebsite = async ({ url }: { url: string }) => {
  const supported = await Linking.canOpenURL(url);

  if (supported) {
    await Linking.openURL(url);
  }
};
