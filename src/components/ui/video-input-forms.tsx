import { Label } from "@radix-ui/react-label";
import { Separator } from "@radix-ui/react-separator";
import { FileVideo, Upload } from "lucide-react";
import { Textarea } from "./textarea";
import { Button } from "./button";
import { ChangeEvent, FormEvent, useMemo, useRef, useState } from "react";


    export function VideoInputForm() {
        const [videoFile, setVideoFile] = useState<File | null>(null)
        const promptImputRef = useRef
        <HTMLTextAreaElement>(null)
        
        function handleFileSelected(event: ChangeEvent<HTMLInputElement>) {
            const { files } = event.currentTarget

        if (!files) {
            return
        }

        const selectedFile = files[0]
        
        setVideoFile(selectedFile)
    }

    function handleUploadVideo(event:FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const prompt = promptImputRef.current?.value

        if(!videoFile) {
            return
        }

        //Converter o video em áudio

        
    }

    const previewURL = useMemo(() => {
        if(!videoFile) {
            return null
        }

        return URL.createObjectURL(videoFile)
    },[videoFile])


    return (
        <form className="space-y-6 ">
          <label 
          htmlFor="video"
          className="relative border flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground
          hover:bg-primary/5 border-emerald-400"
          >
            {previewURL ? (
                <video src={previewURL} controls={false} className="pointer-events-none absolute inset-0"/>
            ) : (
        <>
            <FileVideo className="w-4 h-4"/>
            Selecione um vídeo
        </>
            )}
          </label>

          <input type="file" id="video" accept="video/mp4" className="sr-only" onChange={handleFileSelected} ></input>

          <Separator/>

          <div className="space-y-2">

            <Label htmlFor="transcription_prompt">Prompt de Transcrição</Label> 
            
            <Textarea 
            ref={promptImputRef}
            id="transcription_prompt"
            className="h-40 leading-relaxed resize-none border-emerald-400"
            placeholder="Incula palavras chaves selecionadas no Vídeo separadas por vírgula (,)
            "/>
          </div>

          <Button type="submit" className="w-full bg-white hover:bg-green-400 text-black">
            Carregar vídeo
            <Upload className="m-4 h-4 ml-2"/>
          </Button>
        </form>
    )
}
