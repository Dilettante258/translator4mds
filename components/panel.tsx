import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {AiConfigCard, ConfigCard} from "@/components/parameters/ConfigCard";
import {Gear, Robot} from "@phosphor-icons/react";
import {Suspense} from "react";


export function Panel () {
  console.log('rendered: Panel');
  return(
    <Tabs defaultValue="config"  className="min-w-full select-none">
      <TabsList>
        <TabsTrigger value="config"><Gear size={20} />设定</TabsTrigger>
        <TabsTrigger value="ai"><Robot size={20} />AI参数</TabsTrigger>
      </TabsList>
      <Suspense>
        <TabsContent value="config">
          <ConfigCard />
        </TabsContent>
        <TabsContent value="ai">
          <AiConfigCard />
        </TabsContent>
      </Suspense>
    </Tabs>
  )
}