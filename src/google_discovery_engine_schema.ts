import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDiscoveryEngineSchemaArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleDiscoveryEngineSchemaArgs {
  data_store_id: string;
  json_schema?: string;
  location: string;
  schema_id: string;
  timeouts?: GoogleDiscoveryEngineSchemaArgsTimeouts;
}

export class google_discovery_engine_schema extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleDiscoveryEngineSchemaArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_discovery_engine_schema", resourceName);
  }

  get data_store_id(): string {
    return `${this.resourceType}.${this.resourceName}.data_store_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get location(): string {
    return `${this.resourceType}.${this.resourceName}.location`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get schema_id(): string {
    return `${this.resourceType}.${this.resourceName}.schema_id`;
  }
}
