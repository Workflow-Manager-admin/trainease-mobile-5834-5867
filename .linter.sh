#!/bin/bash
cd /home/kavia/workspace/code-generation/trainease-mobile-5834-5867/trainease_mobile
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

