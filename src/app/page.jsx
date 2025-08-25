"use client";

import { useEffect, useState } from "react"; // ← 編集

export default function TodoApp() {
  // 状態（データ）の管理
  const [todos, setTodos] = useState([]); // タスクの一覧

  // ↓追加ここから ------------------------------------------------------------------
  // コンポーネントが最初に表示されたときに実行される処理
  useEffect(() => {
    // LocalStorageからデータを読み込む
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []); // 空の配列 [] は「最初の1回だけ実行」という意味

  // todosが変更されたときに実行される処理
  useEffect(() => {
    // ブラウザのLocalStorageにデータを保存
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]); // [todos] →「todosが変更されたときに実行」という意味
  // ↑追加ここまで ------------------------------------------------------------------

  // 新しいタスクを追加する関数
  const addTodo = (text) => {
    // ... (省略)
  };

  // ... (省略)
}
