/*
 * Copyright 2021 Red Hat, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const CopyPlugin = require("copy-webpack-plugin");
const patternflyBase = require("@kie-tools-core/patternfly-base");
const { merge } = require("webpack-merge");
const common = require("@kie-tools-core/webpack-base/webpack.common.config");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ProvidePlugin } = require("webpack");

module.exports = async (env) => {
  return merge(common(env), {
    entry: {
      index: "./src/index.tsx",
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./static/index.html",
        inject: false,
        minify: false,
      }),
      new CopyPlugin({
        patterns: [
          { from: "./static/resources", to: "./resources" },
          { from: "./static/images", to: "./images" },
          { from: "./static/favicon.svg", to: "./favicon.svg" },
        ],
      }),
      new ProvidePlugin({
        process: require.resolve("process/browser.js"),
        Buffer: ["buffer", "Buffer"],
      }),
    ],

    module: {
      rules: [...patternflyBase.webpackModuleRules],
    },
  });
};
