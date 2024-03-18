"use client"

import type { MouseEventHandler } from "react";

const axios = require('axios').default;
const { v4: uuidv4 } = require('uuid');


import React, { useState, FormEvent } from 'react'


import {useGlobalStore} from "@/components/GlobalStore";
import {toast} from "@/components/ui/use-toast";
import {ToastAction} from "@/components/ui/toast";

let key = "7c3ba162f0554dea841f53c307787733";
let endpoint = "https://api.cognitive.microsofttranslator.com";

// location, also known as region.
// required if you're using a multi-service or regional (not global) resource. It can be found in the Azure portal on the Keys and Endpoint page.
let location = "eastasia";

let params = new URLSearchParams();
params.append("api-version", "3.0");



async function azurePost (original_text: string, from:string, to:string): Promise<string> {

  params.append("from", from);
  params.append("to", to);

  let res:string = "";
  console.log("111111111111");
  await axios({
    baseURL: endpoint,
    url: '/translate',
    method: 'post',
    headers: {
      'Ocp-Apim-Subscription-Key': key,
      // location required if you're using a multi-service or regional (not global) resource.
      'Ocp-Apim-Subscription-Region': location,
      'Content-type': 'application/json',
      'X-ClientTraceId': uuidv4().toString()
    },
    params: params,
    data: [{
      'text': original_text
    }],
    responseType: 'json'
    }).then((response: { data: any; }) => {
        res = response.data[0]["translations"][0]["text"];
      })
    .catch((error: any) => {
      // if (error.status === 429) {
      //   let retryAfter = error.headers['retry-after'] || 1; // Use 1 second as default retry time
      //   await new Promise(res => setTimeout(res, retryAfter * 1000));
      //   continue;
      // }
      toast({
          variant: "destructive",
          title: "Uh oh! There was a problem with your request.",
          description: (
            <>
              <p className="rounded-md bg-slate-950 p-4 text-wrap">
                {error?.response.request.response}
              </p>
            </>
          ),
      })
      console.log(error)
    });
  return res;
}


export default azurePost;