<template>
  <div>
    <hr />
    Child counter : {{ childCounter }}<br />
  </div>
</template>
<script>
export default {
  name: "Child",
  // 상위 컴포넌트에서 내려준 counter 속성을 num로 받음
  //   props: ["num"],
};
</script>