import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleWorkflowsWorkflowArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleWorkflowsWorkflowArgs {
  call_log_level?: string;
  crypto_key_name?: string;
  deletion_protection?: boolean;
  labels?: { [key: string]: string };
  region?: string;
  source_contents?: string;
  user_env_vars?: { [key: string]: string };
  timeouts?: GoogleWorkflowsWorkflowArgsTimeouts;
}

export class google_workflows_workflow extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleWorkflowsWorkflowArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_workflows_workflow", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get description(): string {
    return `${this.resourceType}.${this.resourceName}.description`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get name_prefix(): string {
    return `${this.resourceType}.${this.resourceName}.name_prefix`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get revision_id(): string {
    return `${this.resourceType}.${this.resourceName}.revision_id`;
  }

  get service_account(): string {
    return `${this.resourceType}.${this.resourceName}.service_account`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
