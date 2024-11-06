<script>
  import "../app.css";
  import { Drawer, Button, CloseButton, Sidebar, SidebarBrand, SidebarCta, SidebarDropdownItem, SidebarDropdownWrapper, SidebarGroup, SidebarItem, SidebarWrapper } from 'flowbite-svelte';
  import { ChartPieSolid, CartSolid, GridSolid, MailBoxSolid, UsersSolid, ShoppingBagSolid, ArrowRightToBracketOutline, EditOutline } from 'flowbite-svelte-icons';
  import { sineIn } from 'svelte/easing';
  let hidden2 = true;
  let spanClass = 'flex-1 ms-3 whitespace-nowrap';
  let transitionParams = {
    x: -320,
    duration: 200,
    easing: sineIn
  };
</script>

<div class="text-center">
  <Button on:click={() => (hidden2 = false)}>Show navigation</Button>
</div>
<Drawer transitionType="fly" {transitionParams} bind:hidden={hidden2} id="sidebar2">
  <div class="flex items-center">
    <h5 id="drawer-navigation-label-3" class="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Menu</h5>
    <CloseButton on:click={() => (hidden2 = true)} class="mb-4 dark:text-white" />
  </div>
  <Sidebar>
    <SidebarWrapper divClass="overflow-y-auto py-4 px-3 rounded dark:bg-gray-800">
      <SidebarGroup>
       <SidebarItem label="Dashboard">
          <svelte:fragment slot="icon">
            <ChartPieSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
          </svelte:fragment>
        </SidebarItem>
      </SidebarGroup>
    </SidebarWrapper>
  </Sidebar>
</Drawer>
<slot />
