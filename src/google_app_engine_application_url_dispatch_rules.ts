import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleAppEngineApplicationUrlDispatchRulesArgsDispatchRules {
  domain?: string;
  path: string;
  service: string;
}

export interface GoogleAppEngineApplicationUrlDispatchRulesArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleAppEngineApplicationUrlDispatchRulesArgs {
  dispatch_rules: GoogleAppEngineApplicationUrlDispatchRulesArgsDispatchRules[];
  timeouts?: GoogleAppEngineApplicationUrlDispatchRulesArgsTimeouts;
}

export class google_app_engine_application_url_dispatch_rules extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleAppEngineApplicationUrlDispatchRulesArgs) {
    const meta = {dispatch_rules:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_app_engine_application_url_dispatch_rules", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }
}
