import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleApigeeTargetServerArgsSSlInfoCommonName {
  value?: string;
  wildcard_match?: boolean;
}

export interface GoogleApigeeTargetServerArgsSSlInfo {
  ciphers?: string[];
  client_auth_enabled?: boolean;
  enabled: boolean;
  ignore_validation_errors?: boolean;
  key_alias?: string;
  key_store?: string;
  protocols?: string[];
  trust_store?: string;
  common_name?: GoogleApigeeTargetServerArgsSSlInfoCommonName;
}

export interface GoogleApigeeTargetServerArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleApigeeTargetServerArgs {
  description?: string;
  env_id: string;
  host: string;
  is_enabled?: boolean;
  name: string;
  port: number;
  s_sl_info?: GoogleApigeeTargetServerArgsSSlInfo;
  timeouts?: GoogleApigeeTargetServerArgsTimeouts;
}

export class google_apigee_target_server extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleApigeeTargetServerArgs) {
    const meta = {s_sl_info:{isBlock:true,common_name:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_apigee_target_server", resourceName);
  }

  get env_id(): string {
    return `${this.resourceType}.${this.resourceName}.env_id`;
  }

  get host(): string {
    return `${this.resourceType}.${this.resourceName}.host`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get port(): string {
    return `${this.resourceType}.${this.resourceName}.port`;
  }

  get protocol(): string {
    return `${this.resourceType}.${this.resourceName}.protocol`;
  }
}
