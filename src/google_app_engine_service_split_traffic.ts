import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleAppEngineServiceSplitTrafficArgsSplit {
  allocations: { [key: string]: string };
  shard_by?: string;
}

export interface GoogleAppEngineServiceSplitTrafficArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleAppEngineServiceSplitTrafficArgs {
  migrate_traffic?: boolean;
  service: string;
  split: GoogleAppEngineServiceSplitTrafficArgsSplit;
  timeouts?: GoogleAppEngineServiceSplitTrafficArgsTimeouts;
}

export class google_app_engine_service_split_traffic extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleAppEngineServiceSplitTrafficArgs) {
    const meta = {split:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_app_engine_service_split_traffic", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get service(): string {
    return `${this.resourceType}.${this.resourceName}.service`;
  }
}
