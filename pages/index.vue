<template>
  <section>
    <CBox :width="$chakra.theme.container" mx="auto">
      <CSimpleGrid :columns="[1, 1, 2]" spacing="4">
        <CBox>
          <CHeading as="h1" font-family="heading" size="2xl" mb="8">
            Awesome H1 headline to capture
          </CHeading>
          <CHeading size="lg" font-weight="400" color="gray.600">
            An H2 explanation of how it's so good
            and what it can do.
          </CHeading>
        </CBox>
        <CBox background-color="#63b257" height="200px" rounded="6px" overflow="hidden">
ss
        </CBox>
      </CSimpleGrid>
    </CBox>
    <CBox as="section" mt="8">
      <CBox :width="$chakra.theme.container" mx="auto">
        <CSimpleGrid :columns="[1, 1, 2, 4]" spacing="4">
          <CFlex direction="column" align="center">
            <CBox>Icon</CBox>
            <CHeading as="h2" font-family="heading" mb="4">
              Advantage
            </CHeading>
            <CBox>
              This explains what the advantage is, and why
              you should be interested.
            </CBox>
          </CFlex>
          <CFlex direction="column" align="center">
            <CBox>Icon</CBox>
            <CHeading as="h2" font-family="heading" mb="4">
              Advantage
            </CHeading>
            <CBox>
              This explains what the advantage is, and why
              you should be interested.
            </CBox>
          </CFlex>
          <CFlex direction="column" align="center">
            <CBox>Icon</CBox>
            <CHeading as="h2" font-family="heading" mb="4">
              Advantage
            </CHeading>
            <CBox>
              This explains what the advantage is, and why
              you should be interested.
            </CBox>
          </CFlex>
          <CFlex direction="column" align="center">
            <CBox>Icon</CBox>
            <CHeading as="h2" font-family="heading" mb="4">
              Advantage
            </CHeading>
            <CBox>
              This explains what the advantage is, and why
              you should be interested.
            </CBox>
          </CFlex>
        </CSimpleGrid>
      </CBox>
    </CBox>
    <CBox as="section" mt="8">
      <CBox :width="$chakra.theme.container" mx="auto">
        <CHeading as="h1" mb="8">Rulebox in action</CHeading>
        <CBox background-color="#63b257" height="200px" rounded="6px" overflow="hidden">
ss
        </CBox>
      </CBox>
    </CBox>
    <CBox as="section" mt="8">
      <CBox :width="$chakra.theme.container" mx="auto">
        <CHeading as="h1" mb="8">Why build it yourself?</CHeading>
        <Cbox as="p">
          You can build this stuff yourself and that really sucks, because
          it get complicated really quickly and you don't want that. Check out
          all the stuff you need to build in order to make a rules engine:
        </CBox>
        <c-list spacing="3">
          <c-list-item>
            <c-list-icon icon="check-circle" color="green.500" />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </c-list-item>
          <c-list-item>
            <c-list-icon icon="check-circle" color="green.500" />
            Assumenda, quia temporibus eveniet a libero incidunt suscipit
          </c-list-item>
          <c-list-item>
            <c-list-icon icon="check-circle" color="green.500" />
            Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
          </c-list-item>
          <c-list-item>
            <c-list-icon icon="check-circle" color="green.500" />
            Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
          </c-list-item>
        </c-list>
      </CBox>
    </CBox>
    <CBox as="section" mt="8" py="8" backgroundColor="gray.50">
      <CBox :width="$chakra.theme.container" mx="auto">
        <CHeading as="h1" mb="8">Get started now</CHeading>
        <CSimpleGrid :columns="[1, 1, 3]" spacing="8">
          <CFlex
            p="3"
            direction="column"
            align="center"
            background-color="white"
            borderColor="gray"
            borderWidth="1px"
            rounded="5px">
            <CHeading as="h2">
              Starter
            </CHeading>
            <CBox font-size="2xl">Free</CBox>
            <CList styleType="disc">
              <CListItem>100,000 transactions per month</CListItem>
              <CListItem>1 studio user</CListItem>
              <CListItem>Unlimited revisions</CListItem>
              <CListItem>Unlimited test cases</CListItem>
            </CList>
          </CFlex>
          <CFlex
            p="3"
            direction="column"
            align="center"
            background-color="white"
            borderColor="gray"
            borderWidth="1px"
            rounded="5px">
            <CHeading as="h2">
              Team
            </CHeading>
            <CBox font-size="2xl">$99/m</CBox>
            <CList styleType="disc">
              <CListItem>1,000,000 transactions per month</CListItem>
              <CListItem>1 studio user</CListItem>
              <CListItem>Unlimited revisions</CListItem>
              <CListItem>Unlimited test cases</CListItem>
            </CList>
          </CFlex>
          <CFlex
            p="3"
            direction="column"
            align="center"
            background-color="white"
            borderColor="gray"
            borderWidth="1px"
            rounded="5px">
            <CHeading as="h2">
              Pro
            </CHeading>
            <CBox font-size="2xl">$399/m</CBox>
            <CList styleType="disc">
              <CListItem>10,000,000 transactions per month</CListItem>
              <CListItem>Unlimited studio users</CListItem>
              <CListItem>Unlimited revisions</CListItem>
              <CListItem>Unlimited test cases</CListItem>
            </CList>
          </CFlex>
        </CSimpleGrid>
      </CBox>
    </CBox>
  </section>
</template>

<script>
import { CBox, CFlex, CHeading, CList, CListItem, CListIcon, CSimpleGrid } from '@chakra-ui/vue'

export default {
  components: { CBox, CFlex, CHeading, CList, CListItem, CListIcon, CSimpleGrid }
}
</script>

<style>

</style>
