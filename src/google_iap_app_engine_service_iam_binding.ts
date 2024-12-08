import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleIapAppEngineServiceIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleIapAppEngineServiceIamBindingArgs {
  app_id: string;
  members: string[];
  role: string;
  service: string;
  condition?: GoogleIapAppEngineServiceIamBindingArgsCondition;
}

export class google_iap_app_engine_service_iam_binding extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleIapAppEngineServiceIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_iap_app_engine_service_iam_binding", resourceName);
  }

  get app_id(): string {
    return `${this.resourceType}.${this.resourceName}.app_id`;
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get members(): string {
    return `${this.resourceType}.${this.resourceName}.members`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }

  get service(): string {
    return `${this.resourceType}.${this.resourceName}.service`;
  }
}
