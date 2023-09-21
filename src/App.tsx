import { Button } from "./components/ui/button";
import { Github, Wand2 } from "lucide-react"
import { Separator } from "./components/ui/separator";
import { Textarea } from "./components/ui/textarea";
import { Label } from "./components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select";
import { Slider } from "./components/ui/slider";
import { VideoInputForm } from "./components/ui/video-input-forms";


export function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className={`
      px-6 py-3 flex items-center justify-between border-b border-red-600
      `}>
        <h1 className="text-xl font-bold">Upload.ai</h1>

        <div className={`
        flex items-center gap-3
        `}>
          <span className="text-sm text-muted-foreground">Desenvolvindo com 💗 Por <a className="hover:text-blue-400" href="https://www.linkedin.com/in/joão-lemos-781044207/" target="_blank">Lemos0250</a></span>

          <Separator orientation='vertical' className="h-6"/>

          <Button variant={"outline"}>
            <Github className="m-4 h-4 mr-2"/>
            Github
          </Button>
        </div>
      </div>

      <main className="flex-1 p-6 flex gap-6">
      <div className="flex flex-col flex-1 gap-4">
        <div className="grid grid-rem-2 gap-4 flex-1">
          <Textarea 
          className="resize-none p-5 leading-relaxed"
          placeholder="Inclua o Pompt para a IA..."
          
          />
          <Textarea 
          className="resize-none p-5 leading-relaxed"
          placeholder="Resultado gerado pela IA..." 
          readOnly
          />
        </div>

        <p className="text-sm text-muted-foreground">
          €
          Lembre-se: Você pode utilizar a varíavel <code className="text-violet-400">{'{transcription}'}</code> no seu Prompt para adicionar o conteúdo da treansição do video selecionado
        </p>

      </div>


      <aside className="w-80 space-y-6">
        <VideoInputForm />
      
      <Separator />


      <form className="space-y-6">
        <div className="space-y-2">
          <Label> Prompt </Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Selecione um Prompt"/>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='title'>Título do Youtube</SelectItem>
              <SelectItem value='description'>Descrição do Youtube</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label> Modelo </Label>
          <Select disabled defaultValue='gpt3.5'>
            <SelectTrigger>
              <SelectValue/>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='gpt3.5'>GPT 3.5-Turbo 16k</SelectItem>
            </SelectContent>
          </Select>
          <span className="block text-sm text-muted-foreground italic">Você poderá custumizar essa opção em breve
          </span>
        </div>

        <Separator/>


        <div className="space-y-2 ">
          <Label> Temperatura </Label>
          <Slider
          className="bg-green-400"
            min={0}
            max={1}
            step={0.1}
            />
          
          <span className="block text-sm text-muted-foreground italic leading-relaxed">Valores mais altos tendem a deixar o resultado mais criativo e com possíveis erros.
          </span>
        </div>   

        <Separator/>

        <Button type='submit' className="w-full bg-white hover:bg-green-400 text-black">
          Executar
          <Wand2 className="w-4 h-4 ml-2"/>
        </Button>

      </form>
      </aside>
      </main>

    </div>
  )
}

