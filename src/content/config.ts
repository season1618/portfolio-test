// 1. `astro:content`からユーティリティをインポート
import { z, defineCollection } from "astro:content";
// 2. コレクションを定義
const blogCollection = defineCollection({
  type: "content", // v2.5.0以降
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
  }),
});
// 3. コレクションを登録するために、単一の`collections`オブジェクトをエクスポート
//    このキーは、"src/content"のコレクションのディレクトリ名と一致する必要があります。
export const collections = {
  blog: blogCollection,
};
