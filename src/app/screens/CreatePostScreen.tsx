import { useCreatePost } from "@/src/services/query/useAuthQuery";
import React, { useState } from "react";
import { Button, TextInput, View } from "react-native";

export default function CreatePostScreen() {
  const createPost = useCreatePost();
  const [title, setTitle] = useState("");

  return (
    <View>
      <TextInput value={title} onChangeText={setTitle} placeholder="Title" />

      <Button
        title="Create Post"
        onPress={() => createPost.mutate({ title })}
        disabled={createPost.isPending}
      />
    </View>
  );
}
