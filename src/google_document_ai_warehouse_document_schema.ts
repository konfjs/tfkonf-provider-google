import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDocumentAiWarehouseDocumentSchemaArgsPropertyDefinitionsDateTimeTypeOptions {
}

export interface GoogleDocumentAiWarehouseDocumentSchemaArgsPropertyDefinitionsEnumTypeOptions {
  possible_values: string[];
  validation_check_disabled?: boolean;
}

export interface GoogleDocumentAiWarehouseDocumentSchemaArgsPropertyDefinitionsFloatTypeOptions {
}

export interface GoogleDocumentAiWarehouseDocumentSchemaArgsPropertyDefinitionsIntegerTypeOptions {
}

export interface GoogleDocumentAiWarehouseDocumentSchemaArgsPropertyDefinitionsMapTypeOptions {
}

export interface GoogleDocumentAiWarehouseDocumentSchemaArgsPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions {
}

export interface GoogleDocumentAiWarehouseDocumentSchemaArgsPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions {
  possible_values: string[];
  validation_check_disabled?: boolean;
}

export interface GoogleDocumentAiWarehouseDocumentSchemaArgsPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions {
}

export interface GoogleDocumentAiWarehouseDocumentSchemaArgsPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions {
}

export interface GoogleDocumentAiWarehouseDocumentSchemaArgsPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions {
}

export interface GoogleDocumentAiWarehouseDocumentSchemaArgsPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources {
  name?: string;
  processor_type?: string;
}

export interface GoogleDocumentAiWarehouseDocumentSchemaArgsPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions {
}

export interface GoogleDocumentAiWarehouseDocumentSchemaArgsPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions {
}

export interface GoogleDocumentAiWarehouseDocumentSchemaArgsPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions {
  display_name?: string;
  is_filterable?: boolean;
  is_metadata?: boolean;
  is_repeatable?: boolean;
  is_required?: boolean;
  is_searchable?: boolean;
  name: string;
  retrieval_importance?: string;
  date_time_type_options?: GoogleDocumentAiWarehouseDocumentSchemaArgsPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions;
  enum_type_options?: GoogleDocumentAiWarehouseDocumentSchemaArgsPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions;
  float_type_options?: GoogleDocumentAiWarehouseDocumentSchemaArgsPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions;
  integer_type_options?: GoogleDocumentAiWarehouseDocumentSchemaArgsPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions;
  map_type_options?: GoogleDocumentAiWarehouseDocumentSchemaArgsPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions;
  schema_sources?: GoogleDocumentAiWarehouseDocumentSchemaArgsPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources[];
  text_type_options?: GoogleDocumentAiWarehouseDocumentSchemaArgsPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions;
  timestamp_type_options?: GoogleDocumentAiWarehouseDocumentSchemaArgsPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions;
}

export interface GoogleDocumentAiWarehouseDocumentSchemaArgsPropertyDefinitionsPropertyTypeOptions {
  property_definitions: GoogleDocumentAiWarehouseDocumentSchemaArgsPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions[];
}

export interface GoogleDocumentAiWarehouseDocumentSchemaArgsPropertyDefinitionsSchemaSources {
  name?: string;
  processor_type?: string;
}

export interface GoogleDocumentAiWarehouseDocumentSchemaArgsPropertyDefinitionsTextTypeOptions {
}

export interface GoogleDocumentAiWarehouseDocumentSchemaArgsPropertyDefinitionsTimestampTypeOptions {
}

export interface GoogleDocumentAiWarehouseDocumentSchemaArgsPropertyDefinitions {
  display_name?: string;
  is_filterable?: boolean;
  is_metadata?: boolean;
  is_repeatable?: boolean;
  is_required?: boolean;
  is_searchable?: boolean;
  name: string;
  retrieval_importance?: string;
  date_time_type_options?: GoogleDocumentAiWarehouseDocumentSchemaArgsPropertyDefinitionsDateTimeTypeOptions;
  enum_type_options?: GoogleDocumentAiWarehouseDocumentSchemaArgsPropertyDefinitionsEnumTypeOptions;
  float_type_options?: GoogleDocumentAiWarehouseDocumentSchemaArgsPropertyDefinitionsFloatTypeOptions;
  integer_type_options?: GoogleDocumentAiWarehouseDocumentSchemaArgsPropertyDefinitionsIntegerTypeOptions;
  map_type_options?: GoogleDocumentAiWarehouseDocumentSchemaArgsPropertyDefinitionsMapTypeOptions;
  property_type_options?: GoogleDocumentAiWarehouseDocumentSchemaArgsPropertyDefinitionsPropertyTypeOptions;
  schema_sources?: GoogleDocumentAiWarehouseDocumentSchemaArgsPropertyDefinitionsSchemaSources[];
  text_type_options?: GoogleDocumentAiWarehouseDocumentSchemaArgsPropertyDefinitionsTextTypeOptions;
  timestamp_type_options?: GoogleDocumentAiWarehouseDocumentSchemaArgsPropertyDefinitionsTimestampTypeOptions;
}

export interface GoogleDocumentAiWarehouseDocumentSchemaArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleDocumentAiWarehouseDocumentSchemaArgs {
  display_name: string;
  document_is_folder?: boolean;
  location: string;
  project_number: string;
  property_definitions: GoogleDocumentAiWarehouseDocumentSchemaArgsPropertyDefinitions[];
  timeouts?: GoogleDocumentAiWarehouseDocumentSchemaArgsTimeouts;
}

export class google_document_ai_warehouse_document_schema extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleDocumentAiWarehouseDocumentSchemaArgs) {
    const meta = {property_definitions:{isBlock:true,date_time_type_options:{isBlock:true},enum_type_options:{isBlock:true},float_type_options:{isBlock:true},integer_type_options:{isBlock:true},map_type_options:{isBlock:true},property_type_options:{isBlock:true,property_definitions:{isBlock:true,date_time_type_options:{isBlock:true},enum_type_options:{isBlock:true},float_type_options:{isBlock:true},integer_type_options:{isBlock:true},map_type_options:{isBlock:true},schema_sources:{isBlock:true},text_type_options:{isBlock:true},timestamp_type_options:{isBlock:true}}},schema_sources:{isBlock:true},text_type_options:{isBlock:true},timestamp_type_options:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_document_ai_warehouse_document_schema", resourceName);
  }

  get display_name(): string {
    return `${this.resourceType}.${this.resourceName}.display_name`;
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

  get project_number(): string {
    return `${this.resourceType}.${this.resourceName}.project_number`;
  }
}
