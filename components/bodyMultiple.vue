<template>
  <div class="body">
    <p>hello from the body</p>
    <CButton color="primary" disabled class="mehrdad">Primary</CButton>
    <CDropdown>
      <CDropdownToggle color="primary">Dropdown Button</CDropdownToggle>
      <CDropdownMenu>
        <CDropdownItem href="#">Action</CDropdownItem>
        <CDropdownItem href="#">Another action</CDropdownItem>
        <CDropdownItem href="#">Something else here</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  </div>
</template>

<script>
  import { CDropdownToggle, CDropdownMenu, CDropdownItem, CDropdown, CButton } from "@coreui/vue";
  export default {
    name: "bodyMultiple",
    components: {
      CButton,
      CDropdown,
      CDropdownItem,
      CDropdownMenu,
      CDropdownToggle,
    },
  };
</script>

<style>
  .mehrdad {
  }
</style>
